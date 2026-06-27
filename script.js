/* =========================================================
   Instagram Mock
   script.js
   v1.0 - Part 1
========================================================= */

let profileData = {};
let currentPost = null;

document.addEventListener("DOMContentLoaded", init);


/* =========================================================
   INIT
========================================================= */

function init(){

    profileData = DATA;

    renderProfile();

    renderHighlights();

    renderFeed();

}


/* =========================================================
   PROFILE
========================================================= */

function renderProfile(){

    const profile = profileData.profile;

    const section = document.getElementById("profileSection");

    section.innerHTML = `

    <div class="profile-top">

        <img
            class="profile-image"
            src="${profile.profileImage}"
        >

        <div class="profile-info">

            <div class="profile-name">

                <span>${profile.username}</span>

                ${
                    profile.verified
                    ? `<span class="material-symbols-outlined profile-verified">
                        verified
                      </span>`
                    : ""
                }

            </div>

            <div class="profile-stats">

                <div class="profile-stat">

                    <strong>${profileData.posts.length}</strong>

                    <span>게시물</span>

                </div>

                <div class="profile-stat">

                    <strong>${profile.followers}</strong>

                    <span>팔로워</span>

                </div>

                <div class="profile-stat">

                    <strong>${profile.following}</strong>

                    <span>팔로잉</span>

                </div>

            </div>

        </div>

    </div>



    <div class="profile-bio">

        <div class="profile-display">

            ${profile.displayName}

        </div>

        <div class="profile-bio-text">

            ${profile.bio.join("<br>")}

        </div>

        <div class="profile-link">

            ${profile.link}

        </div>

    </div>



    <div class="profile-buttons">

        <button>프로필 편집</button>

        <button>프로필 공유</button>

    </div>

    `;

}


/* =========================================================
   HIGHLIGHT
========================================================= */

function renderHighlights(){

    const section =
        document.getElementById("highlightSection");

    section.innerHTML = "";

    profileData.highlights.forEach((item,index)=>{

        section.innerHTML += `

        <div
            class="highlight"
            onclick="openHighlight(${index})"
        >

            <div class="highlight-ring">

                <img src="${item.cover}">

            </div>

            <div class="highlight-title">

                ${item.title}

            </div>

        </div>

        `;

    });

}


/* =========================================================
   FEED
========================================================= */

function renderFeed(){

    const feed = document.getElementById("feed");

    feed.innerHTML="";

    profileData.posts.forEach(post=>{

        let icon="";

        if(post.images.length>1){

            icon=`
                <span class="material-symbols-outlined feed-multiple">
                    collections
                </span>
            `;

        }

        feed.innerHTML += `

        <div
            class="feed-item"
            onclick="openPost(${post.id})"
        >

            <img
                src="${post.images[0]}"
            >

            ${icon}

        </div>

        `;

    });

}


/* =========================================================
   TEMP
========================================================= */

function openPost(id){

    console.log("게시물",id);

}

function openHighlight(id){

    console.log("하이라이트",id);

}


/* =========================================================
   POST MODAL
========================================================= */

function openPost(id){

    currentPost =
        profileData.posts.find(post => post.id === id);

    if(!currentPost) return;

    buildModal();

}


function buildModal(){

    const modal =
        document.getElementById("postModal");

    const wrapper =
        modal.querySelector(".swiper-wrapper");

    wrapper.innerHTML="";

    currentPost.images.forEach(image=>{

        wrapper.innerHTML+=`

        <div class="swiper-slide">

            <img src="${image}">

        </div>

        `;

    });

    document.getElementById("modalHeader").innerHTML=`

        <strong>

            ${profileData.profile.username}

        </strong>

        <br>

        ${currentPost.location}

    `;

    document.getElementById("modalCaption").innerHTML=`

        ${currentPost.caption}

    `;

    document.getElementById("modalDate").innerHTML=`

        ${currentPost.date}

    `;

    modal.classList.remove("hidden");

    new Swiper(".postSwiper",{

        pagination:{
            el:".swiper-pagination"
        },

        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        }

    });

}



document
.getElementById("closeModal")
.addEventListener("click",closeModal);

function closeModal(){

    document
    .getElementById("postModal")
    .classList.add("hidden");

}