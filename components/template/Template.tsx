import Footer from "./Footer";
import Header from "./Header";

interface TemplateProps {
    children: React.ReactNode
}

export default function Template({ children }: TemplateProps) {
    return (
        <>
            <Header />
            <main className="pb-[130px] flex flex-col gap-2 sm:pb-[90px] md:pb-[70px] lg:pb-[55px]">
                {children}
            </main>
            <Footer />
        </>
    )
}