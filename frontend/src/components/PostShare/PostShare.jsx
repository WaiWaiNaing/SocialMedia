import React, {useState, useRef} from 'react'
import './PostShare.css'
import ProfileImg from '../../img/profileImg.jpg'
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes } from '@iconscout/react-unicons'


const PostShare = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange = (event) => {
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0]
            setImage({image: URL.createObjectURL(img)})
        }
    }

  return (
    <div className="PostShare">
        <img src={ProfileImg} alt=""/>
        <div>
            <input type="text" placeholder="What's Happening"/>
            <div className="postOptions">
            <div className="option" style={{color: "var(--photo)"}}
            onClick={() => imageRef.current.click()}
            >
                    <UilScenery/>
                    <span>Photo</span>
            </div>
            <div className="option" style={{color: "var(--video)"}}>
                    <UilPlayCircle/>
                    <span>Video</span>
            </div>
            <div className="option" style={{color: "var(--location)"}}>
                    <UilLocationPoint/>
                    <span>Location</span>
            </div>
            <div className="option" style={{color: "var(--schedule)"}}>
                    <UilSchedule/>
                    <span>Schedule</span>   
            </div>
            <button className="button ps-button">
                Share
            </button>
            <div style={{display: "none"}}>
                <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
            </div>
        </div>
        {image && (
            <div className="previewImage">
                <UilTimes onClick={() => setImage(null)}/>
                <img src={image.image} alt=""/>
            </div>
        )}
        </div>
    </div>
  )
}

export default PostShare