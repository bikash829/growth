# System structure and notes

content gap 40px,64px

## Breakdown Prefix:

> sm 640px @media (min-width: 640px) { ... } default
> md 768px @media (min-width: 768px) { ... } // container sm
> lg 1024px @media (min-width: 1024px) { ... } // container lg
> xl 1280px @media (min-width: 1280px) { ... } // container lg
> 2xl 1536px @media (min-width: 1536px) { ... }// container lg

## Font Family

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')
</style>

> font-family: "Poppins", sans-serif;  
> font-weight: 100;  
> font-style: normal;

## Font Size in different breakpoint

### Less Than 640px

Navigation Menu : 28px  
Logo : 12 px  
header paragraph : 12px  
header title : 34px  
line height : 130%

#### email input

font-weight: 300;  
line-height: 1em;
font-size: 12px;  
border-radius: 35px;  
padding: 16px 90px 16px 24px;  
background-color : rgba(255, 255, 255, 0.01);  
box-shadow: inset 0 0 0 1px;

## Colors

> White : rgb(255,255,255);  
> Blue : rgb(67, 67, 237);  
> dark : rgb(17, 17, 17);  
> light-dark : rgb(31, 31, 31);  
> transparent-white : rgba(255, 255, 255, 0.12);  
> transparent-white-deeper : rgba(255, 255, 255, 0.5);  
> button-transparency : rgba(255, 255, 255, .08);

## about Section

#### section name

border color : rgba(255, 255, 255, 0.08);  
border-radius : 8px;  
padding: 8px 48px;  
font-family: Inter, Inter Placeholder, sans-serif);  
font-size : 24px;

#### section title

font-family: Poppins;  
framer-font-size: 42px;  
 framer-font-weight: 300;  
 framer-line-height: 100%;

#### section paragraph

framer-font-family: "Inter-Light", "Inter", "Inter Placeholder", sans-serif;  
framer-font-weight: 300;  
framer-line-height: 150%;  
framer-text-color: rgb(255, 255, 255);  
framer-font-size: 14px;

#### section card

@media (max-width: 809px) {  
.framer-UOWbw .framer-owahuu {  
flex-direction: column;  
gap: 20px;  
width: 100%;  
 }  
}  
border-radius: 24px  
border-color: rgba(255, 255, 255, 0.12);  
--framer-font-family: "Poppins", "Poppins Placeholder", sans-serif;  
--framer-font-size: 66px;  
font-size : 18px  
--framer-line-height: 100%;  
gap: 7px;  
padding: 28px 52px;

## service section :

--framer-font-family: "Poppins", "Poppins Placeholder", sans-serif;  
--framer-font-size: 36px;  
--framer-font-weight: 300;  
--framer-line-height: 100%;

gap: 20px; from other content

#### paragraph

--framer-font-family: "Inter-Light", "Inter", "Inter Placeholder", sans-serif;  
--framer-font-size: 14px;  
--framer-font-weight: 300;  
--framer-line-height: 150%;

#### service list

##### minimized

gap 16px  
gap: 12px;  
padding: 0px 0px 10px;  
font-size: 18px  
font-family : poppins

##### extended

border-radius: 12px;  
transform: none;  
transform-origin: 50% 50% 0px;  
background: linear-gradient(90deg, rgb(67, 67, 237) 0%, rgba(66, 66, 237, 0) 100%);  
padding: 12px 12px 20px;  
----- title  
poppins  
padding: 0px 0px 10px;  
--framer-font-size: 18px;  
--framer-letter-spacing: 0px;  
--framer-line-height: 1.5em;  
--------paragraph  
font-size : 16px;  
--framer-font-weight: 300;  
--framer-letter-spacing: 0px;  
--framer-line-height: 1.5em;

## Advantages

--framer-font-family: "Poppins", "Poppins Placeholder", sans-serif;  
--framer-font-size: 42px;  
--framer-font-weight: 300;  
--framer-line-height: 100%;  
--framer-text-color: rgb(255, 255, 255);  
--framer-text-alignment: left;

#### card

##### header

border-radius: 32px;  
box-shadow: rgba(67, 67, 237, 0.1) 0px 1px 40px 0px;  
padding: 16px 20px 32px 16px;
poppins
--framer-font-size: 32px;  
--framer-font-weight: 300;  
--framer-line-height: 120%;
--border-color: var(--token-8ccb7294-7b30-4fbc-9032-1c8e71247f25, rgb(67, 67, 237));

##### paragraph

--framer-font-size: 14px;  
--framer-font-weight: 300;  
--framer-line-height: 140%;

###### button

border-radius: 12px;  
padding: 14px 32px;

## testimonial

--framer-font-family: "Poppins", "Poppins Placeholder", sans-serif;
--framer-font-size: 36px;
--framer-font-weight: 300;
--framer-line-height: 100%;

background-image: linear-gradient(92.1482deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);

##### card

height: 220px;
position: relative;
width: 350px;

gap: 24px;  
background-color: rgb(31, 31, 31);
width: 100%;
border-radius: 24px;

- paragraph
- --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif;
  --framer-font-size: 10px;
  --framer-font-weight: 30

* image  
   position: relative;
  width: 48px;
  title : font-size : 16px, 12px,10px;

## faq

font-size : 36px title ;

##### card

gap : 20px;  
padding : padding: 20px 24px;

--framer-font-family: "Inter", "Inter Placeholder", sans-serif;
--framer-font-size: 18px;
--framer-font-weight: 500;
--framer-line-height: 130%;
--framer-text-alignment: left;

## team

header
--framer-font-family: "Poppins", "Poppins Placeholder", sans-serif;
--framer-font-size: 36px;
--framer-font-weight: 300;
--framer-line-height: 100%

##### image

height: 391px;
--border-bottom-width: 1px;
--border-color: rgba(34, 34, 34, 1);
--border-left-width: 1px;
--border-right-width: 1px;
--border-style: solid;
--border-top-width: 1px;
height: 100%;
width: 100%;
opacity: 1;
border-radius: 24px;
box-shadow: none;

image container
height: 288px;
left: calc(50% - 99.5px);
position: absolute;
top: calc(41.688% - 144px);
width: 199px;
}
object-position: center center;
object-fit: cover;
image-rendering: auto;
card bottom :
border-bottom-right-radius: 12px;
gap: 8px;

## footer

#### container

border-top-right-radius: 32px;
gap: 80px;
height: min-content;
padding: 32px 32px 24px;

flex gap
gap: 16px;

font-size : 16px;
--framer-font-family: "Poppins", "Poppins Placeholder", sans-serif;
--framer-font-weight: 300;
--framer-line-height: 130%;
--framer-text-color: var(--extracted-r6o4lv, rgb(17, 17, 17));

button
padding: 14px 32px;
padding: 14px 32px;

marquee
--framer-font-family: "Poppins", "Poppins Placeholder", sans-serif;
--framer-font-size: 160px;
--framer-font-weight: 300;
--framer-line-height: 100%;
