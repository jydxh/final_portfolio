import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

function VideoCard({ title, youtubeId }: { title: string; youtubeId: string }) {
	return (
		<Card sx={{ maxWidth: 1080, mx: "auto", width: "100%" }}>
			<CardMedia
				component="iframe"
				sx={{ aspectRatio: "16 / 9" }}
				src={`https://www.youtube.com/embed/${youtubeId}`}
				title={title}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</Card>
	);
}

export default VideoCard;
