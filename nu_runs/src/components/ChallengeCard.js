import React, { useEffect, useState } from "react";
import axios from "axios";
const ChallengeCard = ({challenge,distance,challengeType,id}) => {
    const getEnrolled = ()=>{
      
    }
    const [imgUrl, setImgUrl] = useState("");

    const fetchChallengeImage = async(id)=>{
      const result = await axios.get("http://localhost:8000/api/challenges/challenge-img/"+id,{ responseType: 'arraybuffer' });
      let image = btoa(
        new Uint8Array(result.data)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      const newImgUrl  = `data:${result.headers['content-type'].toLowerCase()};base64,${image}`;
      setImgUrl(newImgUrl);
    }

    useEffect(()=>{
      fetchChallengeImage(id);
    },[])
    
  return (
    <>
      <div class="col-md-6 col-lg-4" style={{display:"inline-block",textAlign:"center"}}>
        <div>
          <div class="speaker">
            <div class="speaker-img" data-triangle=".speaker-overlay">
              <a href="pricing.php">
                <img
                  src={imgUrl}
                  alt=""
                  width="330"
                  height="354"
                ></img>
              </a>
            </div>
            <h5 >
              <p>{distance} KM Run</p>
            </h5>
            <p class="speaker-position">{challengeType} Challenge</p>
            <button onClick={getEnrolled}>Enroll</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengeCard;