export default async function Project({
    params
}: {
    params: {
        project_id: string
    }
}) {
    /* try {
        var project = await getProjectFromDB();
    } catch (error) {
        console.log(error);
        return <div>error component/page</div>
    } */
    

    return (
        <main className="grid md:grid-cols-2">
            <div>{ params.project_id }</div>
            <div className="">image</div>
        </main>
    )
}