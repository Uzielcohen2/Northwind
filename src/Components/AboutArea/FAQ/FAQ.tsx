import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Container,
    Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import appConfig from '../../../Utils/AppConfig';
import "./FAQ.css"



function FAQ(): JSX.Element {
    const faqData = [
        { question: 'What is your return policy?', answer: 'Our return policy lasts 30 days...' },
        { question: 'How do I track my order?', answer: 'You can track your order by...' },
        { question: 'Do you ship internationally?', answer: 'Yes, we ship to over 100 countries...' },
        { question: 'How can I contact customer support?', answer: 'You can contact us via email...' },
        { question: 'What payment methods do you accept?', answer: 'We accept Visa, MasterCard...' },
        { question: 'How do I change my shipping address?', answer: 'To change your shipping address...' },
        { question: 'What is your privacy policy?', answer: 'Our privacy policy outlines how...' },
        { question: 'How do I cancel my order?', answer: 'To cancel your order, please...' },
        { question: 'Do you offer gift cards?', answer: 'Yes, we offer gift cards in various...' },
        { question: 'What is your warranty policy?', answer: 'We offer a one-year warranty...' },
    ];



    return (
        <div className="FAQ">
            <Container maxWidth="md">
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Frequently Asked Questions :
                    </Typography>
                    {faqData.map((item, index) => (
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index}-content`}
                                id={`panel${index}-header`}
                            >
                                <Typography variant="h6">{item.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{item.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Container>
            <div className="FAQ-button">
                <Button>
                    <NavLink to={appConfig.HomeRoute} >Back Home</NavLink>
                </Button>
            </div>






        </div>
    );
}

export default FAQ;
