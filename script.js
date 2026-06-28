/* =========================================================
   Instagram Mock
   script.js
========================================================= */

/* =========================================================
   전역 변수
========================================================= */

let currentPost = null;
let currentSwiper = null;

let likedPosts = new Set();
let savedPosts = new Set();

/* =========================================================
   시작
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    init();

});

/* =========================================================
   초기화
========================================================= */

function init(){

    renderTopBar();

    renderProfile();

    renderHighlights();

    renderFeed();

    initProfileTabs();

    bindEvents();

}

/* =========================================================
   TopBar
========================================================= */

function renderTopBar(){

    const profile = DATA.profile;

    document.getElementById("usernameText").textContent =
        profile.username;

}

/* =========================================================
   Profile
========================================================= */

function renderProfile(){

    const profile = DATA.profile;

    document.getElementById("profileImage").src =
        profile.profileImage;

    document.getElementById("displayName").textContent =
        profile.displayName;

    document.getElementById("postCount").textContent =
        DATA.posts.length;

    document.getElementById("followerCount").textContent =
        profile.followers;

    document.getElementById("followingCount").textContent =
        profile.following;

    document.getElementById("bioText").innerHTML =
        profile.bio.join("<br>");

    const link =
        document.getElementById("profileLink");

    link.href = profile.link;

    link.textContent = profile.link;

    document
        .getElementById("bottomProfileImage")
        .src = profile.profileImage;

}

/* =========================================================
   Highlight
========================================================= */

function renderHighlights(){

    const section =
        document.getElementById("highlightSection");

    section.innerHTML = "";

    DATA.highlights.forEach((highlight,index)=>{

        section.innerHTML += `

        <div
            class="highlight"
            data-index="${index}">

            <div class="highlight-ring">

                <img
                    src="${highlight.cover}"
                    alt="">

            </div>

            <div class="highlight-title">

                ${highlight.title}

            </div>

        </div>

        `;

    });

}

/* =========================================================
   Feed
========================================================= */

function renderFeed(){

    const feed =
        document.getElementById("feed");

    feed.innerHTML = "";

    DATA.posts.forEach(post=>{

        const multiIcon =
            post.images.length > 1
            ? `
            <span class="material-symbols-outlined feed-multiple">
                collections
            </span>
            `
            : "";

            feed.innerHTML += `

            <div
                class="feed-item"
                data-id="${post.id}">
            
                <img
                    src="${post.images[0]}"
                    alt="">
            
                ${multiIcon}
            
                <div class="feed-overlay">
            
                    <div>
            
                        ❤️ ${post.likes}
            
                    </div>
            
                    <div>
            
                        💬 ${post.comments}
            
                    </div>
            
                </div>
            
            </div>
            
            `;

    });

}

/* =========================================================
   EVENT
========================================================= */

/* =========================================================
   EVENT
========================================================= */

function bindEvents(){

    // 피드 클릭
    document
        .getElementById("feed")
        .addEventListener("click", onFeedClick);

    // 닫기 버튼
    document
        .getElementById("closeModal")
        .addEventListener("click", closePost);

    // 모달 배경 클릭
    document
        .querySelector(".modal-backdrop")
        .addEventListener("click", closePost);

    // ESC
    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){
    
            closePost();
            closeStory();
            return;
    
        }
    
        const modal =
            document.getElementById("postModal");
    
        if(modal.classList.contains("hidden")) return;
    
        if(e.key==="ArrowLeft"){
    
            openPrevPost();
    
        }
    
        if(e.key==="ArrowRight"){
    
            openNextPost();
    
        }
    
    });

    // 하이라이트 클릭
    document
        .getElementById("highlightSection")
        .addEventListener("click",(e)=>{

            const item =
                e.target.closest(".highlight");

            if(!item) return;

            openHighlight(
                Number(item.dataset.index)
            );

        });

    // 스토리 클릭 → 다음
    document
        .getElementById("storyViewer")
        .addEventListener("click",nextStory);

}
/* =========================================================
   FEED CLICK
========================================================= */

function onFeedClick(e){

    const item = e.target.closest(".feed-item");

    if(!item) return;

    const id = Number(item.dataset.id);

    openPost(id);

}

/* =========================================================
   POST OPEN
========================================================= */

function openPost(id){

    currentPost =
        DATA.posts.find(post=>post.id===id);

    if(!currentPost) return;

    document
        .getElementById("postModal")
        .classList.add("hidden");

    buildPost();

    requestAnimationFrame(()=>{

        document
            .getElementById("postModal")
            .classList.remove("hidden");

    });

}

/* =========================================================
   BUILD POST
========================================================= */

function buildPost(){

    const wrapper =
        document.querySelector(".swiper-wrapper");

    wrapper.innerHTML="";

    currentPost.images.forEach(image=>{

        wrapper.innerHTML += `

        <div class="swiper-slide">

            <img src="${image}">

        </div>

        `;

    });

    document
        .getElementById("modalProfileImage")
        .src = DATA.profile.profileImage;

    document
        .getElementById("modalUsername")
        .textContent = DATA.profile.username;

    document
        .getElementById("modalLocation")
        .textContent = currentPost.location;

    document
        .getElementById("modalCaption")
        .innerHTML = currentPost.caption.join("<br>");

    document
        .getElementById("modalLikes")
        .textContent =
        `좋아요 ${currentPost.likes.toLocaleString()}개`;

    document
        .getElementById("modalDate")
        .textContent = currentPost.date;

    if(currentSwiper){

        currentSwiper.destroy(true,true);

    }

    currentSwiper =
        new Swiper(".postSwiper",{

            loop:false,

            pagination:{
                el:".swiper-pagination",
                clickable:true
            },

            navigation:{
                nextEl:".swiper-button-next",
                prevEl:".swiper-button-prev"
            }

        });

    console.log(document.querySelector(".swiper-wrapper").innerHTML);

    updateActionButtons();
    bindPostActions();

}

/* =========================================================
   CLOSE
========================================================= */

function closePost(){

    destroySwiper();

    document
        .getElementById("postModal")
        .classList.add("hidden");

}
/* =========================================================
   STORY
========================================================= */

let currentHighlight = 0;
let currentStory = 0;
let storyTimer = null;

function openHighlight(index){

    currentHighlight = index;
    currentStory = 0;

    showStory();

}
/* =========================================================
   SHOW STORY
========================================================= */

function showStory(){

    const viewer =
        document.getElementById("storyViewer");

    const content =
        document.getElementById("storyContent");

    const progress =
        document.getElementById("storyProgress");

    const highlight =
        DATA.highlights[currentHighlight];

    viewer.classList.remove("hidden");

    content.innerHTML = `

        <img
            src="${highlight.stories[currentStory]}"
            alt="">

    `;

    progress.innerHTML = "";

    highlight.stories.forEach((story,index)=>{

        progress.innerHTML += `

            <div class="story-bar">

                <div
                    class="story-bar-fill"
                    style="width:${
                        index<currentStory
                        ? "100%"
                        : "0%"
                    }">
                </div>

            </div>

        `;

    });

    animateStory();

}

/* =========================================================
   AUTO PLAY
========================================================= */

function animateStory(){

    clearTimeout(storyTimer);

    const fills =
        document.querySelectorAll(".story-bar-fill");

    const fill =
        fills[currentStory];

    fill.style.transition = "none";
    fill.style.width = "0%";

    requestAnimationFrame(()=>{

        fill.style.transition = "width 5s linear";
        fill.style.width = "100%";

    });

    storyTimer =
        setTimeout(nextStory,5000);

}

/* =========================================================
   NEXT
========================================================= */

function nextStory(){

    const stories =
        DATA.highlights[currentHighlight].stories;

    currentStory++;

    if(currentStory>=stories.length){

        closeStory();
        return;

    }

    showStory();

}

/* =========================================================
   CLOSE STORY
========================================================= */

function closeStory(){

    clearTimeout(storyTimer);

    document
        .getElementById("storyViewer")
        .classList.add("hidden");

}

/* =========================================================
   KEYBOARD CONTROL
========================================================= */

document.addEventListener("keydown",(e)=>{

    const modal =
        document.getElementById("postModal");

    if(modal.classList.contains("hidden")) return;

    if(!currentSwiper) return;

    switch(e.key){

        case "ArrowLeft":

            currentSwiper.slidePrev();

            break;

        case "ArrowRight":

            currentSwiper.slideNext();

            break;

    }

});


/* =========================================================
   TOAST
========================================================= */

function showToast(message){

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(()=>{

        toast.classList.remove("show");

    },1800);

}


/* =========================================================
   MODAL CLEANUP
========================================================= */

function destroySwiper(){

    if(!currentSwiper) return;

    currentSwiper.destroy(true,true);

    currentSwiper = null;

}

/* =========================================================
   POST ACTION
========================================================= */

function bindPostActions(){

    const buttons =
        document.querySelectorAll(".modal-actions button");

    if(buttons.length < 4) return;

    buttons[0].onclick = toggleLike;

    buttons[3].onclick = toggleSave;

    const swiper =
        document.querySelector(".postSwiper");

    swiper.ondblclick = ()=>{

        if(!likedPosts.has(currentPost.id)){

            likedPosts.add(currentPost.id);

            updateActionButtons();

            showToast("좋아요!");

        }

    };

}

/* =========================================================
   UPDATE BUTTON
========================================================= */

function updateActionButtons(){

    const icons =
        document.querySelectorAll(".modal-actions .material-symbols-outlined");

    if(icons.length < 4) return;

    if(likedPosts.has(currentPost.id)){

        icons[0].classList.add("liked");

    }else{

        icons[0].classList.remove("liked");

    }

    if(savedPosts.has(currentPost.id)){

        icons[3].classList.add("liked");

    }else{

        icons[3].classList.remove("liked");

    }

}

/* =========================================================
   LIKE
========================================================= */

function toggleLike(){

    if(likedPosts.has(currentPost.id)){

        likedPosts.delete(currentPost.id);

        showToast("좋아요 취소");

    }

    else{

        likedPosts.add(currentPost.id);

        showToast("좋아요!");

    }

    updateActionButtons();

}

/* =========================================================
   SAVE
========================================================= */

function toggleSave(){

    if(savedPosts.has(currentPost.id)){

        savedPosts.delete(currentPost.id);

        showToast("저장 취소");

    }

    else{

        savedPosts.add(currentPost.id);

        showToast("저장되었습니다");

    }

    updateActionButtons();

}


/* =========================================================
   POST NAVIGATION
========================================================= */

function openNextPost(){

    const index =
        DATA.posts.findIndex(post=>post.id===currentPost.id);

    if(index>=DATA.posts.length-1) return;

    openPost(DATA.posts[index+1].id);

}

function openPrevPost(){

    const index =
        DATA.posts.findIndex(post=>post.id===currentPost.id);

    if(index<=0) return;

    openPost(DATA.posts[index-1].id);

}

/* =========================================================
   PROFILE TAB
========================================================= */

let currentTab = "posts";

function initProfileTabs(){

    const tabs =
        document.querySelectorAll(".profile-tab");

    tabs.forEach(tab=>{

        tab.addEventListener("click",()=>{

            tabs.forEach(btn=>{

                btn.classList.remove("active");

            });

            tab.classList.add("active");

            currentTab = tab.dataset.tab;

            changeTab();

        });

    });

}

function changeTab(){

    switch(currentTab){

        case "posts":

            renderFeed();

            break;

        case "reels":

            renderReels();

            break;

        case "tagged":

            renderTagged();

            break;

    }

}

/* =========================================================
   REELS
========================================================= */

function renderReels(){

    const feed =
        document.getElementById("feed");

    feed.innerHTML = `

        <div class="empty-tab">

            <span class="material-symbols-outlined">
                movie
            </span>

            <h3>릴스가 없습니다</h3>

        </div>

    `;

}

/* =========================================================
   TAGGED
========================================================= */

function renderTagged(){

    const feed =
        document.getElementById("feed");

    feed.innerHTML = `

        <div class="empty-tab">

            <span class="material-symbols-outlined">
                person_pin
            </span>

            <h3>태그된 게시물이 없습니다</h3>

        </div>

    `;

}