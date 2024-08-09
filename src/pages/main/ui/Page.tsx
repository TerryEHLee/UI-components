import { Link, Box, Typography } from "@mui/material";

export const MainPage = () => {
  return (
    <main>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Link href='/login' variant='body1'>
          Login Page
        </Link>
        <Link href='/enrollment' variant='body1'>
          Enrollment Page
        </Link>
        <Link href='/patient' variant='body1'>
          Patient Page
        </Link>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography>
          이 프로젝트는 공통 UI 컴포넌트를 구성한 프로젝트로 각 페이지에 별도의
          기능은 없이 UI 구성요소만을 구현하였습니다.
        </Typography>
        <Typography>
          링크를 누르시면 해당 페이지의 UI를 확인하실 수 있습니다 :)
        </Typography>
      </Box>
    </main>
  );
};
