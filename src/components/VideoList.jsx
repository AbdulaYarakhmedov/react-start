
const videos = [
    {
        name: 'Замыкание',
        duration: 15,
        id: 1,

    },
    {
        name: 'Джава',
        duration: 15,
        id: 2,

    },
    {
        name: 'Ура!',
        duration: 15,
        id: 3,

    },
    {
        name: 'Отлично!',
        duration: 15,
        id: 4,

    }
]

export function VideoList() {
    return (
        <>
            <h1>Video List</h1>
            {
                videos.map((video) => {
                    return (
                        <div key={video.id}>
                            <p>{video.name}</p>
                            <p>{video.duration}</p>
                            <button>Лайк!</button>
                        </div>
                    )
                })
            }
        </>
    );
}