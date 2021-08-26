import Image from 'next/image'
import Link from 'next/link'

export default function Card(props) {
    return (
        <div className="col-3 mb-5">
            <Link href={"/media/"+props.id}>
                <div className="card mb-0" style={{cursor: "pointer"}}>
                    <div className="rounded" style={{zIndex: 20, height: "200px", background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)"}}>
                        <h3 style={{position: "absolute", bottom: "0", color: "#fff", padding: "5px 10px"}}>
                            {props.title}
                        </h3>
                    </div>
                    <Image
                        className="rounded"
                        src={props.image}
                        layout="fill"
                        objectFit="cover" />
                    
                    <div className="image" style={{position: "absolute", zIndex: 30, margin: "50px 0 0 15%", height: "100px", width: "70%"}}>
                        <Image
                            src={props.logo}
                            layout="fill"
                            objectFit="contain" />
                    </div>
                </div>
            </Link>
            <style jsx>{`
                .rounded {
                    zIndex: 10
                }
                .card {
                    transition: all 0.2s;
                }
                .card:hover {
                    transform:scale(1.15)
                }
                .card h3 {
                    opacity: 0;
                }
            `}</style>
        </div>
        
    )
}
