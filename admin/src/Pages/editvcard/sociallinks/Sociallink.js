import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import * as yup from "yup"
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';
import { TbWorldWww } from "react-icons/tb";
import {AiFillFacebook,
  AiFillRedditCircle,
  AiFillYoutube,
  AiOutlineWhatsApp,
  AiFillInstagram,
  AiFillLinkedin
  } from "react-icons/ai"
import { BsTiktok,BsTwitter } from "react-icons/bs";
import {BiLogoTumblr} from "react-icons/bi"
import {PiPinterestLogoFill} from "react-icons/pi"
import { social } from '../../../store/social/Socialslice';
import "./Sociallink.css"

let  Schema= yup.object().shape({
  Website_url:yup.string().required("required"),
  
  });
function Sociallink() {
  
  
  
  
       
    const {isError,isLoading,isSuccess,socialdata}=useSelector(
      (state) => state?.socialdatax
    );
  
    const dispatch = useDispatch();
    
    const formik = useFormik({
      initialValues:{
        Website_url:"",
        Twiter_url:"",
        Facbook_url:"",
        Instagram_url:"",
        Reddit_url:"",
        Tumbler_url:"",
        Youtube_url:"",
        Linkedin_url:"",
        Pininterest_url:"",
        Tiktok_url:""
      },
      validationSchema:Schema,
      onSubmit:(values)  => {
        console.log("abcde");
        dispatch(social(values))
      },
    });
  
  
    useEffect(()=>{
      if (isError) {
          alert("Sorry Something went wrong")
      }
      if (isLoading) {
          alert("Loading")
      }
      if (isSuccess) {
          alert("Sucess")
      }
  },[isError,isLoading,isSuccess,socialdata])
  
  return (
    <div>
        <div className='social-inner'>
          
         <Form onSubmit={formik.handleSubmit}>
         <div className='sl-1'>
        <FormGroup>
          <TbWorldWww/>
          <FormControl
            type="text"
            placeholder='Website URL'
            name="Website_url"
            onChange={formik.handleChange("Website_url")}
            values={formik.values.Website_url}
          />
          <div className="text-danger">
            {formik.touched.Website_url && formik.errors.Website_url}
          </div>       
        </FormGroup>
        <FormGroup>
          <AiFillFacebook/>
          <FormControl
            type="text"
            placeholder='Facebook URL'
            name="Facbook_url"
            onChange={formik.handleChange("Facbook_url")}
            values={formik.values.Facbook_url}
          />
        </FormGroup>
        <FormGroup>
          <AiFillRedditCircle/>
          <FormControl
            type="text"
            name="Reddit_url"
            placeholder='Reddit URL'
            onChange={formik.handleChange("Reddit_url")}
            values={formik.values.Reddit_url}
          />
        </FormGroup>
        <FormGroup>
          <AiFillYoutube/>
          <FormControl
            type="text"
            placeholder='Youtube URL'
            name="Youtube_url"
            onChange={formik.handleChange("Youtube_url")}
            values={formik.values.Youtube_url}
          />
        </FormGroup>
        <FormGroup>
          <AiOutlineWhatsApp/>
          <FormControl
            type="text"
            placeholder='Whatsapp URL'
            name="Whatsapp_url"
            onChange={formik.handleChange("Whatsapp_url")}
            values={formik.values.Whatsapp_url}
          />
        </FormGroup>
        <FormGroup>
          <BsTiktok/>
          <FormControl
            type="text"
            placeholder='Tiktok URL'
            name="Ticktok_url"
            onChange={formik.handleChange("Tiktok_url")}
            values={formik.values.Tiktok_url}
          />
        </FormGroup>
        </div>
        <div className='sl-1'>
        <FormGroup>
          <BsTwitter/>
          <FormControl
            type="text"
            placeholder='Twitter URL'
            name="Twiter_url"
            onChange={formik.handleChange("Twiter_url")}
            values={formik.values.Twiter_url}
          />
        </FormGroup>
        <FormGroup>
          <AiFillInstagram/>
          <FormControl
            type="text"
            placeholder='Instagram URL'
            name="Instagram_url"
            onChange={formik.handleChange("Instagram_url")}
            values={formik.values.Instagram_url}
          />
        </FormGroup>
        
        <FormGroup>
          <BiLogoTumblr/>
          <FormControl
            type="text"
            placeholder='Tumbler URL'
            name="Tumbler_url"
            onChange={formik.handleChange("Tumbler_url")}
            values={formik.values.Tumbler_url}
          />
        </FormGroup>
        <FormGroup>
          <AiFillLinkedin/>
          <FormControl
            type="text"
            placeholder='Linkedin URL'
            name="Linkedin_url"
            onChange={formik.handleChange("Linkedin_url")}
            values={formik.values.Linkedin_url}
          />
        </FormGroup>
        <FormGroup>
          <PiPinterestLogoFill/>
          <FormControl
            type="text"
            placeholder='Pininterest URL'
            name="Pininterest_url"
            onChange={formik.handleChange("Pininterest_url")}
            values={formik.values.Pininterest_url}
          />
        </FormGroup>
        </div>
        <Button type="submit" onClick={formik.handleSubmit}>
            Save
          </Button>
          <Button variant="outline-danger" onClick={formik.handleReset}>
            Discard
          </Button>
        </Form>
        </div>
    </div>
  )
}

export default Sociallink