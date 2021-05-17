import React from "react";
import {Typography, Card, CardActionArea, CardContent, Button, CardActions, Container, Box} from '@material-ui/core';



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
                                    Jishant Acharya
                                    </Typography>
                                    <Typography style={subStyle}>
                                    ML & Backend Developer
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" style={buttonStyle} href="https://www.linkedin.com/in/jishant-acharya-32352418b">
                                    LinkedIn
                                </Button>
                                <Button size="small" color="primary" style={buttonStyle} href="https://twitter.com/jishant1?s=08">
                                    Twitter
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
                                <Button size="small" color="primary" style={buttonStyle} href="https://www.linkedin.com/in/axay">
                                    LinkedIn
                                </Button>
                                <Button size="small" color="primary" style={buttonStyle} href="https://twitter.com/axayagrawal">
                                    Twitter
                                </Button>
                            </CardActions>
                        </Card>
            </Box>

            <Box direction="row" style={{display: 'flex'}}>

                <Card style={rootStyle}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom style={nameStyle}>
                                    Shreya Kamble
                                    </Typography>
                                    <Typography style={subStyle}>
                                    Frontend & Integration
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" style={buttonStyle} href="https://www.linkedin.com/in/shreya-kamble-227ab6192">
                                    LinkedIn
                                </Button>

                            </CardActions>
                        </Card>
                <Card style={rootStyle}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom style={nameStyle}>
                                    Amol Ajgaonkar
                                    </Typography>
                                    <Typography style={subStyle}>
                                    QA & Documentation
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" style={buttonStyle} href=" https://www.linkedin.com/in/amol-ajgaonkar99">
                                    LinkedIn
                                </Button>

                            </CardActions>
                        </Card>
                </Box>

                        
      



      </Container>



    );
}

export default Team;