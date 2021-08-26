import { useRouter } from 'next/router'

export default function Player({data}) {
    const router = useRouter()
    const { id } = router.query;
    
    return <div>
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <video id="video" autoPlay controls>
            <source src="/video.mp4" type="video/mp4" />
        </video>
        
        <style jsx>{`
            .spinner-border {
                z-index: 10;
                width: 100px;
                height: 100px;
                border-color: #000;
            }
            video {
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: #333;
                z-index: 1;
            }
        `}</style>
    </div>
}
