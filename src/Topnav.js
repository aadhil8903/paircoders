import React from "react";
import {Link} from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple,MDBRow, MDBCol,footer } from 'mdb-react-ui-kit';
import './App.css';

export default function App() {
  
  return (
    
    <div className="dark">
    <MDBCol>
    <MDBRow>
   
    <div class="row row-cols-1 row-cols-md-5 g-2">
    
      
   <MDBCol>  
    <MDBCard className='h-100' style={{ maxWidth: '27rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <div class="bg-image hover-zoom">  <MDBCardImage src='https://i.imgur.com/KRwfMz3.png' fluid alt='...' /> </div>
       
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle class="text-light">JavaScript</MDBCardTitle>
        <MDBCardText class="text-light">
       javascript programmers
        </MDBCardText>
     <Link to="/Program1">    <MDBBtn  type="button" class="btn btn-dark btn-rounded"> open </MDBBtn> </Link>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
  
  <MDBCol>
    <MDBCard className='h-100' style={{ maxWidth: '27rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <div class="bg-image hover-zoom">  <MDBCardImage src='https://zenlab.edu.np/wp-content/uploads/2018/05/python_wallpaper__free_download__4k___by_drelix_dcfh81e-fullview.jpg' fluid alt='...' /> </div>
       
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle class="text-light">python</MDBCardTitle>
        <MDBCardText class="text-light">
      python programmers
        </MDBCardText>
        <Link to="/Program2">    <MDBBtn  type="button" class="btn btn-dark btn-rounded"> open </MDBBtn> </Link>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard className='h-100' style={{ maxWidth: '27rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <div class="bg-image hover-zoom">  <MDBCardImage src='https://i1.wp.com/wallpapersfortech.com/wp-content/uploads/2021/01/Black-Java-Wallpaper-HD.png?fit=3840%2C2160&ssl=1' fluid alt='...' /> </div>
       
      </MDBRipple>
      <MDBCardBody >
        <MDBCardTitle class="text-light">java</MDBCardTitle>
        <MDBCardText class="text-light">
       java programmers
        </MDBCardText>
        <Link to="/Program3">      <MDBBtn  type="button" class="btn btn-dark btn-rounded"> open </MDBBtn> </Link>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard className='h-100' style={{ maxWidth: '27rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <div class="bg-image hover-zoom">     <MDBCardImage src='https://i.pinimg.com/originals/91/fc/53/91fc530e79f90a45d5ec1da28eddf3d1.jpg' fluid alt='...' /> </div>
        
      </MDBRipple>
      <MDBCardBody >
        <MDBCardTitle class="text-light">C-language</MDBCardTitle>
        <MDBCardText class="text-light">
         c programmers
        </MDBCardText>
        <Link to="/Program4">      <MDBBtn  type="button" class="btn btn-dark btn-rounded"> open </MDBBtn> </Link>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard className='h-100' style={{ maxWidth: '27rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <div class="bg-image hover-zoom">    <MDBCardImage src='https://miro.medium.com/max/750/1*-hL6ZeXl_Kt0O-b82UQo9A.png' fluid alt='...' /> </div>
        
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle class="text-light">full-stack development</MDBCardTitle>
        <MDBCardText class="text-light">
      full-stack developers
        </MDBCardText>
        <Link to="/Program5">      <MDBBtn  type="button" class="btn btn-dark btn-rounded"> open </MDBBtn> </Link>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard className='h-100' style={{ maxWidth: '27rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <div class="bg-image hover-zoom"> <MDBCardImage src='https://developer.apple.com/news/images/og/swiftui-og.png' fluid alt='...' /> </div> 
        
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle class="text-light">swift</MDBCardTitle>
        <MDBCardText class="text-light">
      swift ui developers 
        </MDBCardText>
        <Link to="/Program1">       <MDBBtn  type="button" class="btn btn-dark btn-rounded"> open </MDBBtn> </Link>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard className='h-100' style={{ maxWidth: '27rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <div class="bg-image hover-zoom"> <MDBCardImage src='https://mk0appinventiv4394ey.kinstacdn.com/wp-content/uploads/sites/1/2019/10/Android-app-development-cost-1.png' fluid alt='...' /> </div>
        
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle class="text-light">App-development</MDBCardTitle>
        <MDBCardText class="text-light">
        App developers
        </MDBCardText>
        <Link to="/Program3">      <MDBBtn  type="button" class="btn btn-dark btn-rounded"> open </MDBBtn> </Link>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard className='h-95' style={{ maxWidth: '27rem' }}>
      <MDBRipple rippleColor='dark' rippleTag='div' className='bg-image hover-overlay'>
      <div class="bg-image hover-zoom">    <MDBCardImage src='https://1000logos.net/wp-content/uploads/2017/03/Symbol-Linux.jpg' fluid alt='...' /> </div>
       
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle class="text-light">Linux</MDBCardTitle>
        <MDBCardText class="text-light">
         linux users 
        </MDBCardText >
        <Link to="/Program4">    <MDBBtn  type="button" class="btn btn-dark btn-rounded"> open </MDBBtn> </Link>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard className='h-100' style={{ maxWidth: '27rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <div class="bg-image hover-zoom">     <MDBCardImage src='https://www.php.net/images/logos/new-php-logo.svg' fluid alt='...' /> </div>
       
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle class="text-light"> php </MDBCardTitle>
        <MDBCardText class="text-light">
    php programmers
        </MDBCardText >
        <Link to="/Program5">    <MDBBtn  type="button" class="btn btn-dark btn-rounded"> open </MDBBtn> </Link>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol>
    <MDBCard className='h-100' style={{ maxWidth: '27rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <div class="bg-image hover-zoom">      <MDBCardImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png' fluid alt='...' /> </div>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle class="text-light">Ruby/Ruby on Rails</MDBCardTitle>
        <MDBCardText class="text-light">
     ruby programmers
        </MDBCardText>
        <Link to="/Program1"> <MDBBtn  type="button" class="btn btn-dark btn-rounded"> open </MDBBtn> </Link>
      </MDBCardBody>
    </MDBCard>


    </MDBCol>
    
  
    </div>
 </MDBRow>
    </MDBCol>
    
<footer class="bg-dark text-center text-lg-start">
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase text-light">pair-coders</h5>

        <p class="text-light">
          please dont hurt any of your pair
          dont hurt them with the word that contains
          script kidy

          if you have any problem 
          please contact us at the email address 
          given below
        </p>
      </div>
      
    </div>
    
  </div>
 
  <div class="text-center p-3" alighn="background-color: rgba(0, 0, 0, 0.2);">
     Having any trouble :
    <a class="text-danger" href="https://mail.google.com/mail/paircoderscommunity@gmail.com/0/#inbox?compose=new">paircoderscommunity@gmail.com
     </a>
  </div>
  
</footer>
  </div>
 
  
  );
}