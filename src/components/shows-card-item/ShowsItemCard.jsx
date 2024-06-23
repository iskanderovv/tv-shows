import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const ShowsItemCard = ({title, image}) => {
  return (
    <Card
      sx={{
        background: "#222933",
        maxWidth: { lg: "350px", md: "300px", sm: "350px", xs: "350px" },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height: { xs: "auto", md: 350 },
            width: "100%",
            objectFit: "cover",
          }}
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography
            sx={{
              color: "#a5bbdc",
            }}
            variant="subtitle1"
            component="div"
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ShowsItemCard;
