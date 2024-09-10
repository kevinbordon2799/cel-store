"use client";

import { useRouter } from "next/navigation";

export default function NotFoundPage() {
    const router = useRouter();

    const handleClick: React.MouseEventHandler<HTMLButtonElement> =
        function () {
            router.back();
        };

    return (
        <div>
            <h1>Esta página no existe</h1>
            <br />
            <button onClick={handleClick}>Regresar</button>
        </div>
    );
}
