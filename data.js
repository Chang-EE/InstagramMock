/* =========================================================
   Instagram Mock
   data.js
========================================================= */

const DATA = {

    /* =====================================================
       [수정] 프로필
       여기만 수정하면 프로필 정보가 변경됩니다.
    ====================================================== */

    profile: {

        /* ================================
           [수정] 인스타 아이디
        ================================ */

        username: "hee_chan",

        /* ================================
           [수정] 표시 이름
        ================================ */

        displayName: "희쨩🖤",

        /* ================================
           [수정] 인증 배지
           true / false
        ================================ */

        verified: true,

        /* ================================
           [수정] 프로필 사진
        ================================ */

        profileImage: "assets/profile/p.jpg",

        /* ================================
           [수정] 팔로워
        ================================ */

        followers: "986K",

        /* ================================
           [수정] 팔로잉
        ================================ */

        following: 67,

        /* ================================
           [수정] 소개글
           줄 하나당 한 줄입니다.
        ================================ */

        bio: [

            "ktwiz 치어리더",

            "꼴리는대로 살자 🤍",

            "그렇다고 너무 빨딱 서버리진 마요😘"

        ],

        /* ================================
           [수정] 링크
        ================================ */

        link: "https://chang-ee.github.io/InstagramMock/"

    },



    /* =====================================================
       [수정] 하이라이트
       여기에 추가하면 자동 생성됩니다.
    ====================================================== */

    highlights: [

        {

            title: "치어리딩",

            cover: "assets/highlights/cheer/hcc.png",

            stories: [

                "assets/highlights/cheer/hc1.jpg",

                "assets/highlights/cheer/hc2.jpg",

                "assets/highlights/cheer/hc3.jpg",

                "assets/highlights/cheer/hc4.jpg",

                "assets/highlights/cheer/hc5.jpg",

                "assets/highlights/cheer/hc6.jpg",

                "assets/highlights/cheer/hc7.jpg",

                "assets/highlights/cheer/hc8.jpg",

                "assets/highlights/cheer/hc9.jpg",
                
                "assets/highlights/cheer/hc10.jpg",

                "assets/highlights/cheer/hc11.jpg",

                "assets/highlights/cheer/hc12.jpg",  

                "assets/highlights/cheer/hc13.jpg",

                "assets/highlights/cheer/hc14.jpg",

                "assets/highlights/cheer/hc15.jpg",

                "assets/highlights/cheer/hc16.jpg",

                "assets/highlights/cheer/hc17.jpg",

                "assets/highlights/cheer/hc18.jpg",

                "assets/highlights/cheer/hc19.jpg",

                "assets/highlights/cheer/hc20.jpg",

                "assets/highlights/cheer/hc21.jpg",
                
                "assets/highlights/cheer/hc22.jpg",

                "assets/highlights/cheer/hc23.jpg",

                "assets/highlights/cheer/hc24.jpg",                              

                "assets/highlights/cheer/hc25.jpg",

                "assets/highlights/cheer/hc26.jpg",

                "assets/highlights/cheer/hc27.png",

                "assets/highlights/cheer/hc28.png",

                "assets/highlights/cheer/hc29.png",

                "assets/highlights/cheer/hc30.jpg",

                "assets/highlights/cheer/hc31.jpg",

                "assets/highlights/cheer/hc32.jpg",

                "assets/highlights/cheer/hc33.jpg",
                
                "assets/highlights/cheer/hc34.jpg",

                "assets/highlights/cheer/hc35.jpg",

                "assets/highlights/cheer/hc36.png",

                "assets/highlights/cheer/hc37.png",

                "assets/highlights/cheer/hc38.png",

                "assets/highlights/cheer/hc39.png",

                "assets/highlights/cheer/hc40.png",

                "assets/highlights/cheer/hc41.png",

                "assets/highlights/cheer/hc42.png",

                "assets/highlights/cheer/hc43.png",

                "assets/highlights/cheer/hc44.png",

                "assets/highlights/cheer/hc45.png",
                
                "assets/highlights/cheer/hc46.png"
            ]

        },



        {

            title: "스튜어디스",

            cover: "assets/highlights/airline/hac.jpg",

            stories: [

                "assets/highlights/airline/ha1.jpg",

                "assets/highlights/airline/ha2.jpg",

                "assets/highlights/airline/ha3.jpg",

                "assets/highlights/airline/ha4.jpg",

                "assets/highlights/airline/ha5.jpg",

                "assets/highlights/airline/ha6.jpg"

            ]

        },

        {

            title: "인방 BJ",

            cover: "assets/highlights/bj/hbc.png",

            stories: [

                "assets/highlights/bj/hb1.jpg",

                "assets/highlights/bj/hb2.jpg",

                "assets/highlights/bj/hb3.jpg",

                "assets/highlights/bj/hb4.jpg",
            ]

        }

    ],



    /* =====================================================
       [수정] 게시물
       게시물을 추가하면 자동으로 피드에 나타납니다.
    ====================================================== */

    posts: [
        /* =====================================================
           [수정] 게시물 1
        ====================================================== */

        {

            /* ================================
               [수정] 게시물 번호
               절대 중복되면 안 됩니다.
            ================================ */

            id: 1,

            /* ================================
               [수정] 위치
               없으면 "" 로 두세요.
            ================================ */

            location: "Everland",

            /* ================================
               [수정] 게시물 설명
            ================================ */

            caption: "에버랜드에서 찍은 하루 🎡",

            /* ================================
               [수정] 사진
               순서대로 슬라이드됩니다.
            ================================ */

            images: [

                "assets/posts/post001/1.jpg",

                "assets/posts/post001/2.jpg",

                "assets/posts/post001/3.jpg"

            ],

            /* ================================
               [수정] 좋아요
            ================================ */

            likes: 52341,

            /* ================================
               [수정] 댓글 수
            ================================ */

            comments: 238,

            /* ================================
               [수정] 업로드 날짜
            ================================ */

            date: "2026-06-27"

        },



        /* =====================================================
           [수정] 게시물 2
        ====================================================== */

        {

            id: 2,

            location: "",

            caption: "퇴근 ☕",

            images: [

                "assets/posts/post002/1.jpg"

            ],

            likes: 18213,

            comments: 91,

            date: "2026-06-26"

        },



        /* =====================================================
           [수정] 게시물 3
        ====================================================== */

        {

            id: 3,

            location: "KT Wiz Park",

            caption: "오늘도 응원 완료 💙",

            images: [

                "assets/posts/post003/1.jpg",

                "assets/posts/post003/2.jpg"

            ],

            likes: 87422,

            comments: 482,

            date: "2026-06-25"

        }

    ]

};