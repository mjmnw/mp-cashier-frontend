import Navbar from "../../Components/Navbar/Navbar";

export default function LandingPage() {
    return (
        <div className="bg-color-4">
            <Navbar/>
            <main className="w-[cacl(100%-3.37rem)] ml-auto bg-color-2">
                <div className="2xl:container mx-auto space-y-6">
                    <div className="h-16 border-b border-gray-300/40"></div>
                    <div className="px-6 lg:px-12">
                        <div className="h-96 flex justify-center items-center rounded-2xl border border-dashed border-gray-300/40">
                            <span className="text-gray-900">
                                content
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
