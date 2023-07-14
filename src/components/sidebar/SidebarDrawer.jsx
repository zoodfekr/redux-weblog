import { Button, Drawer } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import { toggleSidebar } from '../../feature/slices/sidebarSlice';


const SidebarDrawer = () => {

    const selector = useSelector(state => state.sidebar);
    const dispatch = useDispatch();

    return (
        <Drawer
            onClose={() => dispatch(toggleSidebar())}
            // dir='rtl'
            anchor="right"
            variant="temporary"
            open={selector.show}
            sx={{
                '& .MuiDrawer-paper': {
                    width: 250
                },
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none"
                },

            }}
        >
                <Sidebar></Sidebar>
        </Drawer>
    )
};

export default SidebarDrawer;