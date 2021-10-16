song_1 = "114_pirates_of_caribbean_themes_mp3_ringtone_ringtone_mp3.mp3";
song_2 = "44_avengers_theme_bgm_mp3_ringtone_ringtone_mp3.mp3";

function preload()
{
    song_1 = loadSound("114_pirates_of_caribbean_themes_mp3_ringtone_ringtone_mp3.mp3");
    song_1 = loadSound("44_avengers_theme_bgm_mp3_ringtone_ringtone_mp3.mp3");
}
function setup()
{
    canvas = createCanvas(600, 500)
    canvas.center;
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{

    image(video, 0, 0, 600, 500);
}