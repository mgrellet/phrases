import {useState} from 'react'
import './App.css'
import { v4 as uuid } from "uuid";
import {Container, TextField, Typography, Button, Card, CardContent} from "@mui/material";
import Grid from '@mui/material/Grid2';

interface Phrase {
    id: number;
    text: string;
}

const Phrases = () => {
    const [phrases, setPhrases] = useState<Phrase[]>([]);
    const [search, setSearch] = useState("");
    const [input, setInput] = useState("");

    const addPhrase = () => {
        if (input.trim() !== "") {
            setPhrases([...phrases, {id: uuid(), text: input.trim()}]);
            setInput("");
        }
    };

    const removePhrase = (id: number) => {
        setPhrases(phrases.filter((phrase) => phrase.id !== id));
    };

    const filteredPhrases = phrases.filter((phrase) =>
        phrase.text.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Frases
            </Typography>
            <TextField
                fullWidth
                label="Buscar..."
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                margin="normal"
            />
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}>
                    <TextField
                        fullWidth
                        label="Añadir frase"
                        variant="outlined"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" color="primary" fullWidth onClick={addPhrase}>
                        Agregar
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={2} marginTop={2}>
                <>
                    {filteredPhrases.map((phrase) => (
                        <Grid item xs={12} sm={6} md={4} key={phrase.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="body1">{phrase.text}</Typography>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        fullWidth
                                        onClick={() => removePhrase(phrase.id)}
                                    >
                                        Eliminar
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </>
            </Grid>
        </Container>
    );
}

export default Phrases;
