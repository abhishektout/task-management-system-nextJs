"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const accessToken = localStorage.getItem("accessToken");
            const isEmployee = localStorage.getItem("role") === "EMPLOYEE";

            if (!accessToken || !isEmployee) {
                router.push("/login");
            } else {
                setIsAuthorized(true);
            }
        }
    }, [router]);

    if (isAuthorized === null) {
        return null;
    }

    return <>{children}</>;
};

export default ProtectedRoute;