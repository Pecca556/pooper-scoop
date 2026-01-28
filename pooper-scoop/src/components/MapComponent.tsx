"use client";

import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "var(--radius)",
};

const defaultCenter = {
    lat: 33.7175,
    lng: -117.8311,
};

interface LocationMarker {
    slug: string;
    name: string;
    coordinates: {
        lat: number;
        lng: number;
    };
}

interface MapComponentProps {
    markers: LocationMarker[];
}

export default function MapComponent({ markers }: MapComponentProps) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    const { isLoaded, loadError } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: apiKey || "",
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);

    const onLoad = useCallback(
        (map: google.maps.Map) => {
            const bounds = new window.google.maps.LatLngBounds();
            if (markers && markers.length > 0) {
                markers.forEach((marker) => {
                    bounds.extend(marker.coordinates);
                });
                map.fitBounds(bounds);
            } else {
                map.setCenter(defaultCenter);
                map.setZoom(10);
            }
            setMap(map);
        },
        [markers]
    );

    const onUnmount = useCallback(function callback(map: google.maps.Map) {
        setMap(null);
    }, []);

    if (!apiKey) {
        return (
            <div className="w-full h-full bg-gray-100 rounded-[var(--radius)] flex items-center justify-center text-gray-500 p-4 text-center border-2 border-dashed border-gray-300">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold">Map Unavailable</p>
                    <p className="text-sm">Google Maps API Key is missing.</p>
                </div>
            </div>
        );
    }

    if (loadError) {
        return (
            <div className="w-full h-full bg-gray-100 rounded-[var(--radius)] flex items-center justify-center text-red-500 p-4 text-center">
                <p>Error loading map</p>
            </div>
        );
    }

    if (!isLoaded) {
        return <div className="w-full h-full bg-gray-200 rounded-[var(--radius)] animate-pulse"></div>;
    }

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {markers &&
                markers.map((marker) => (
                    <Marker
                        key={marker.slug}
                        position={marker.coordinates}
                        title={marker.name}
                    />
                ))}
        </GoogleMap>
    );
}
