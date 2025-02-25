import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    git,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
};

export const workData = [
    {
        title: 'News-Magazine',
        description: 'News App',
        bgImage: '/work-1.png',
        github: 'https://github.com/rittika04/news-magazine', // ✅ GitHub repo link
        liveDemo: 'https://news-magazine-live.com', // ✅ Live project link
    },
    {
        title: 'Spotify - Clone ',
        description: 'Music App',
        bgImage: '/work-2.png',
        github: 'https://github.com/rittika-04/Spotify-Clone',
        liveDemo: 'https://spotify-clone-o7los2dj1-rittika04s-projects.vercel.app/',
    },
    {
        title: 'Photography Site',
        description: 'Web Design',
        bgImage: '/work-3.png',
        github: 'https://github.com/rittika04/photography-site',
        liveDemo: 'https://photography-site-live.com',
    },
    {
        title: 'UI/UX Designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
        github: 'https://github.com/rittika04/ui-ux-design',
        liveDemo: 'https://uiux-design-live.com',
    },
];



export const serviceData = [
    {
        title: "JPMorgan Chase Virtual Internship",
        description: "Completed a job simulation covering Kafka, REST API, and backend tasks.",
        bgImage: "/certificates/jpmorgan_certificate.png",
        link: "/certificates/jpmorgan_certificate.pdf",
        category: "Work & Research",
    },
    {
        title: "Prompt and Response Generator Internship",
        description: "Worked on automated NLP-based prompt-response generation.",
        bgImage: "/certificates/prompt_certificate.png",
        link: "/certificates/prompt_certificate.pdf",
        category: "Work & Research",
    },
    {
        title: "Paper Publication on Road Safety using Pulse and EEG",
        description: "Published a research paper on preventing road accidents using EEG and pulse sensor data analysis.",
        bgImage: "/certificates/paper_publication.jpeg",
        link: "/certificates/paper_publication.pdf",
        category: "Work & Research",
    },
    {
        title: "Crash Course on Python",
        description: "Completed a foundational course on Python covering syntax, data structures, functions, and automation, equipping me with essential programming skills.",
        bgImage: "/certificates/python_certificate-1.png",
        link: "/certificates/python_certificate.pdf",
        category: "Courses"
    }, 
    {
        title: "Full Stack Web Development",
        description: "Completed a certification covering frontend and backend development, including React, Node.js, and databases.",
        bgImage: "/certificates/full-stack-1.png",
        link: "/certificates/full-stack_certificate.pdf",
        category: "Courses",
    },
    {
        title: "Data Structures using C",
        description: "Earned a certification in data structures, covering arrays, linked lists, stacks, queues, trees, and graphs using C.",
        bgImage: "/certificates/c_certificate-1.png",
        link: "/certificates/c_certificate.pdf",
        category: "Courses",
    }
];


export const infoList = [
    { 
        icon: assets.code_icon, 
        iconDark: assets.code_icon_dark, 
        title: "Languages", 
        description: "C++, Java, Python, HTML, CSS, JavaScript, React.js, Next.js"
    },
    { 
        icon: assets.edu_icon, 
        iconDark: assets.edu_icon_dark, 
        title: "Education", 
        description: 
            "🔹 **B.Tech in Electronics & Communication Engineering** - 8.33 SGPA (6th Semester)\n" +
            "🔹 **Taki Girls' Govt. Sponsored High School (Class 12)** - 73%\n" +
            "🔹 **Victoria Institution (Class 10)** - 76.14%"
    },
    { 
        icon: assets.project_icon, 
        iconDark: assets.project_icon_dark, 
        title: "Projects", 
        description: "Developed 3+ projects, including web and software applications."
    }
];


export const toolsData = [
    assets.vscode, assets.git
];
