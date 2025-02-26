import {
  Container,
  createTheme,
  Grid2 as Grid,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Layout from "@theme/Layout";

const theme = createTheme({
  typography: {
    fontFamily: "Monospace",
  },
});

const Paragraph = styled(Typography)(({ theme }) => ({ margin: ".5em" }));

function Home() {
  return (
    <Layout title="Home" description="Taylor Reece home page">
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" sx={{ paddingTop: "2em" }}>
          <Grid container>
            <Grid
              size={{ xs: 12, sm: 4 }}
              display="flex"
              justifyContent="center"
            >
              <img
                src="https://avatars1.githubusercontent.com/u/3622586?s=400&u=92d81adf0d87e31ac26d0f335e154697c2e5d04a&v=4"
                style={{
                  maxWidth: "150px",
                  maxHeight: "150px",
                  borderRadius: "50%",
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 8 }} alignContent="center">
              <Typography
                variant="h1"
                sx={{ fontWeight: 400, fontSize: "2em" }}
              >
                Taylor Reece
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontWeight: 400, fontSize: "1em" }}
              >
                Developer Advocate
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ paddingTop: "2em" }}>
            <Paragraph>
              Hi! I'm Taylor. I'm a software developer and educator based in
              Sioux Falls, South Dakota.
            </Paragraph>
            <Paragraph>
              I spent my first several years post-college teaching math at some
              high schools in the Twin Cities. Then, I decided to give my
              computer science degree a try, and worked as a DevOps Engineer for
              six years.
            </Paragraph>
            <Paragraph>
              Now, I've combined by love of education and software development
              as a Developer Advocate at{" "}
              <a href="https://prismatic.io">Prismatic</a>, where I help
              software companies build integrations.
            </Paragraph>
          </Grid>
        </Container>
      </ThemeProvider>
    </Layout>
  );
}
export default Home;
