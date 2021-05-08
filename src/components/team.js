import React from "react";
import {Typography, Card, CardActionArea, CardContent, Button, CardActions, Container, Grid, Box} from '@material-ui/core';



const Team = () => {


    const sectionTitle={
        color: '#fff',
        fontSize: '32px',
        fontFamily: 'Inter',
        fontWeight: '600',
        marginBottom: '16px'
    }

    const rootStyle={
        width: '320px',
        background: '#2A3752',
        color: '#ffffff',
        fontFamily: 'Inter',
        marginBottom: '32px',
        marginRight: '32px'

    }
    const nameStyle={
        color: '#ffffff',
        fontFamily: 'Inter',
        fontSize: '24px',
        fontWeight: '500'

    }

    const subStyle={
        color: '#ffffff',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontWeight: '500',
        opacity: '0.5'

    }

    const buttonStyle={
        color: '#5D7BB8',
        fontFamily: 'Inter',
        fontSize: '14px',
        fontWeight: '500',
        background: '#1F293D',
        padding: '8px 16px 8px 16px'
    }





    return (
        <Container style={{padding: '16px'}}>
            <Typography style={sectionTitle}>Team</Typography>

            <Box direction="row" style={{display: 'flex'}}>

                <Card style={rootStyle}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom style={nameStyle}>
                                    Akshay Agrawal
                                    </Typography>
                                    <Typography style={subStyle}>
                                    UI/UX Engineer
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" style={buttonStyle}>
                                    LinkedIn
                                </Button>
                                <Button size="small" color="primary" style={buttonStyle}>
                                    Website
                                </Button>
                            </CardActions>
                        </Card>
                <Card style={rootStyle}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom style={nameStyle}>
                                    Akshay Agrawal
                                    </Typography>
                                    <Typography style={subStyle}>
                                    UI/UX Engineer
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" style={buttonStyle}>
                                    LinkedIn
                                </Button>
                                <Button size="small" color="primary" style={buttonStyle}>
                                    Website
                                </Button>
                            </CardActions>
                        </Card>
            </Box>

            <Box direction="row" style={{display: 'flex'}}>

                <Card style={rootStyle}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom style={nameStyle}>
                                    Akshay Agrawal
                                    </Typography>
                                    <Typography style={subStyle}>
                                    UI/UX Engineer
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" style={buttonStyle}>
                                    LinkedIn
                                </Button>
                                <Button size="small" color="primary" style={buttonStyle}>
                                    Website
                                </Button>
                            </CardActions>
                        </Card>
                <Card style={rootStyle}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom style={nameStyle}>
                                    Akshay Agrawal
                                    </Typography>
                                    <Typography style={subStyle}>
                                    UI/UX Engineer
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" style={buttonStyle} href="https://twitter.com/axayagrawal">
                                    LinkedIn
                                </Button>
                                <Button size="small" color="primary" style={buttonStyle}>
                                    Website
                                </Button>
                            </CardActions>
                        </Card>
                </Box>

                        
      



      </Container>



    );
}

export default Team;