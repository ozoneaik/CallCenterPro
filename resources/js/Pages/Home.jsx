import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Input } from "@mui/joy";

export default function Home({ name }) {
    return (

        <>
            <Head title="Home" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Home Page
                        </div>
                        <Input type="test" placeholder="lsfjl"/>
                    </div>
                </div>
            </div>
            
        </>
    )
}