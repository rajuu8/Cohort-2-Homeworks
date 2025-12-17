const reels = [
  {
    username: "Raju.Dash.",
    likeCount: 1240,
    isLiked: false,
    commentCount: 98,
    shareCount: 45,
    reopstCount: 20,
    caption: "Late night coding hits different 💻✨",
    video: "./vd/1.mp4",
    userProfile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
    isFollowed: false
  },
  {
    username: "neha.designs",
    likeCount: 3420,
    isLiked: true,
    commentCount: 210,
    reopstCount: 10,
    shareCount: 120,
    caption: "Design is intelligence made visible 🎨",
    video: "./vd/2.mp4",
    userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    isFollowed: true
  },
  {
    username: "rohan.markets",
    likeCount: 890,
    isLiked: false,
    commentCount: 56,
    reopstCount: 28,
    shareCount: 22,
    caption: "Consistency beats motivation every time 📈",
    video: "./vd/3.mp4",
    userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    isFollowed: false
  },
  {
    username: "priya.creates",
    likeCount: 5670,
    isLiked: true,
    commentCount: 340,
    reopstCount: 60,
    shareCount: 280,
    caption: "Small moments, big memories ✨",
    video: "./vd/4.mp4",
    userProfile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
    isFollowed: true
  },
  {
    username: "kabir.codes",
    likeCount: 2210,
    isLiked: false,
    commentCount: 130,
    reopstCount: 67,
    shareCount: 75,
    caption: "Debugging is like being a detective 🕵️‍♂️",
    video: "./vd/5.mp4",
    userProfile: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200",
    isFollowed: false
  },
  {
    username: "travel.with.adi",
    likeCount: 8450,
    isLiked: true,
    commentCount: 510,
    shareCount: 600,
    reopstCount: 90,
    caption: "Wander more, worry less 🌍",
    video: "./vd/6.mp4",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    isFollowed: true
  },
  {
    username: "fitness.riya",
    likeCount: 4320,
    isLiked: false,
    commentCount: 260,
    reopstCount: 35,
    shareCount: 190,
    caption: "Strong body, strong mind 💪",
    video: "./vd/7.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200",
    isFollowed: false
  },
  {
    username: "music.by.sam",
    likeCount: 1980,
    isLiked: true,
    commentCount: 145,
    reopstCount: 67,
    shareCount: 88,
    caption: "Music is the shortcut to emotions 🎶",
    video: "./vd/8.mp4",
    userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    isFollowed: true
  },
  {
    username: "foodie.nikhil",
    likeCount: 6230,
    isLiked: false,
    commentCount: 390,
    reopstCount: 46,
    shareCount: 410,
    caption: "Good food = good mood 🍔😋",
    video: "./vd/9.mp4",
    userProfile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200",
    isFollowed: false
  },
  {
    username: "tech.daily",
    likeCount: 9120,
    isLiked: true,
    commentCount: 720,
    reopstCount: 76,
    shareCount: 850,
    caption: "Tech that shapes tomorrow 🚀",
    video: "./vd/10.mp4",
    userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
    isFollowed: true
  }
];


let Allreels = document.querySelector('.All-reels')

let sum = '' ;

reels.forEach((dets,idx)=> {
 
  sum += ` <div class="reels">
                <video autoplay muted loop  src="${dets.video}"> </video>
                <i  id="muted" class="fa-solid fa-volume-xmark"></i>
                <div class="bottom">
                   <div class="user">
                     <img src="${dets.userProfile}" alt="">
                    <h2>${dets.username}</h2>
                    <button>${dets.isFollowed?'UNfOLLOW':'FOLLOW'}</button>
                   </div>
                   <div class="discraption">
                    <p>${dets.caption}</p>
                   </div>
                    
                </div>
                <div class="right">
                    <div class="like">
                        <i class="fa-regular fa-heart"></i>
                        <h2>${dets.likeCount}</h2>
                    </div>

                    <div class="cmt">
                        <i class="fa-regular fa-comment"></i>
                        <h2>${dets.commentCount}</h2>
                    </div>
                    
                    <div class="Repost">
                       <i class="fa-solid fa-repeat"></i>
                       <h2>${dets.reopstCount}</h2>
                   </div>

                     <div class="Share">
                        <i class="fa-solid fa-share"></i>
                    </div>


                     <div class="Save">
                        <i class="fa-regular fa-bookmark"></i>
                    </div>

                    <div class="dot">
                        <i class="fa-solid fa-list"></i>
                    </div>

                </div>

                

            </div>
            `
  
});

Allreels.innerHTML = sum;