import PageOne from '../firstPage/one'
export default function Drawer() {
    return (
        <div className="bg-neutral-900 min-h-screen w-full flex justify-center">
            <main className="w-full  flex flex-col">
                <section>
                    <PageOne/>
                </section>
            </main>
        </div>
    )
}