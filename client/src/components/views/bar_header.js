import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function bar_header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" href="/cal_week">캘린더</Button>
                <Button color="inherit" href="/sign_in">로그인</Button>
                <Button color="inherit" href="/sign_up">회원가입</Button>
                <Button color="inherit" href="/sign_up">회원초대</Button>
                <Button color="inherit" href="/sign_up">일정추가</Button>
                <Button color="inherit" href="/sign_up">일정자세히</Button>
                <Button color="inherit" href="/sign_up">할일목록</Button>
            </Toolbar>
        </AppBar>
    )
}

export default bar_header;
