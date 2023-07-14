import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import { AiFillAlert } from "react-icons/ai";
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../feature/slices/themeSlice';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));


const Themebutton = () => {

    const dispatch = useDispatch();
    const selector = useSelector(state => state.theme);

    const handlemode = () => {
        console.log("selector.mode",selector.mode);
        dispatch(toggleTheme())
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "start", px: 5, py: 1 }}>
            <AntSwitch
                checked={selector.mode}
                onClick={handlemode}
            ></AntSwitch>
        </Box>
    )
};
export default Themebutton;