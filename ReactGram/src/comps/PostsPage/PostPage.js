import React,{ useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Title from './Title';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import Aux from '../../hoc/Aux';

const PostPage = () => {
const [selectedImg, setSelectedImg] = useState(null);    
const history = useHistory()

useEffect(() => {
  if(history.location.pathname === "/gallery"){
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function (event){
       window.history.pushState(null, document.title,  window.location.href);
    });
  } 
}, [history.location.pathname])

return (
    <Aux>
    <Title/>
    <UploadForm /> 
    <ImageGrid setSelectedImg={setSelectedImg} />
    { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    )}
    </Aux>
)
}

export default PostPage
