import { zodResolver } from "@hookform/resolvers/zod";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IconButton } from "@/shared/ui/button/IconButton.tsx";
import type { LoginFormSchema } from "@/features/login";
import { loginFormSchema, LoginOptions } from "@/features/login";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
 

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    mode: "onBlur",
  });

  return (
    <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
      <div className='login'>
        <article className='login-box'>
          <div className='login-box--wrapper'>
            <header>
              <div className='header-top'>
               
                <span className='header-text'>Remote Monitoring Services</span>
              </div>
            </header>
            <div className='login-box--cont'>
              <div className='cont-wrap'>
                <h1>Sign in</h1>

                <Box sx={{ mt: 1 }}>
                  <TextField
                    variant='standard'
                    margin='normal'
                    fullWidth
                    label='ID'
                    name='loginID'
                    autoComplete='email'
                    autoFocus
                    className='mui-textfield-required'
                    error={!!errors.loginID}
                    helperText={errors.loginID?.message}
                    {...register("loginID")}
                  />
                  <TextField
                    variant='standard'
                    margin='normal'
                    fullWidth
                    name='password'
                    label='Password'
                    type={showPassword ? "text" : "password"}
                    id='password'
                    autoComplete='current-password'
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            edge='end'
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    {...register("password")}
                  />
                  <LoginOptions />
                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    size='large'
                    sx={{ mt: 3, mb: 2 }}
                    disabled={!isValid}
                  >
                    Sign In
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </article>
      </div>
    </form>
  );
};
