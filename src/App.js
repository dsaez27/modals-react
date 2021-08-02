import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './components/Modal';

export const App = () => {
    const [estadoModal1, setEstadoModal1] = useState(false);
    const [estadoModal2, setEstadoModal2] = useState(false);
    const [estadoModal3, setEstadoModal3] = useState(false);
    const [estadoModal4, setEstadoModal4] = useState(false);
    return (
        <div>
            <ContenedoresBotones>
                <Boton onClick={() => setEstadoModal1(true)}>Modal1</Boton>
                <Boton onClick={() => setEstadoModal2(true)}>Modal2</Boton>
                <Boton onClick={() => setEstadoModal3(true)}>Modal3</Boton>
                <Boton onClick={() => setEstadoModal4(true)}>Modal4</Boton>
            </ContenedoresBotones>
            {/* Modal#1 */}
            <Modal
                estado={estadoModal1}
                cambiarEstado={setEstadoModal1}
                titulo='Ventana 1'
                mostrarHeader={true}
                mostrarOverlay={false}
                posicionModal={'center'}
                padding={'10px'}
            >
                <Contenido>
                    <h1>Modal</h1>
                    <p>Reutilizable y con opciones de personalización</p>
                    <h1>Modal</h1>
                    <p>Reutilizable y con opciones de personalización</p>
                    <h1>Modal</h1>
                    <p>Reutilizable y con opciones de personalización</p>
                    <h1>Modal</h1>
                    <p>Reutilizable y con opciones de personalización</p>
                    <Boton>Aceptar</Boton>
                </Contenido>
            </Modal>
            {/* Modal#2 */}
            <Modal
                estado={estadoModal2}
                cambiarEstado={setEstadoModal2}
                titulo='Ventana 2'
                mostrarHeader={true}
                mostrarOverlay={false}
                posicionModal={'center'}
                padding={'10px'}
            >
                <Contenido>
                    <h1>Modal</h1>
                    <p>Reutilizable y con opciones de personalización</p>
                    <Boton>Aceptar</Boton>
                </Contenido>
            </Modal>
            {/* Modal#3 */}
            <Modal
                estado={estadoModal3}
                cambiarEstado={setEstadoModal3}
                titulo='Ventana 3'
                mostrarHeader={true}
                mostrarOverlay={false}
                posicionModal={'center'}
                padding={'10px'}
            >
                <Contenido>
                    <h1>Modal</h1>
                    <p>Reutilizable y con opciones de personalización</p>
                    <Boton>Aceptar</Boton>
                </Contenido>
            </Modal>
            {/* Modal#4 */}
            <Modal
                estado={estadoModal4}
                cambiarEstado={setEstadoModal4}
                titulo='Ventana 4'
                mostrarHeader={false}
                mostrarOverlay={false}
                posicionModal={'center'}
                padding={'0px'}
            >
                <Contenido>
                    <img
                        src='https://www.proandroid.com/wp-content/uploads/2017/04/thumb-1920-736068.png'
                        alt='Imagen de ejemplo'
                    />
                </Contenido>
            </Modal>
        </div>
    );
};

const ContenedoresBotones = styled.div`
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const Boton = styled.div`
    display: block;
    padding: 10px 30px;
    border-radius: 100px;
    border: none;
    background: #1766dc;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    transition: 0.3s ease all;
    color: #fff;
    &:hover {
        background: #0066ff;
    }
`;

const Contenido = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 42px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        margin-bottom: 20px;
    }

    img {
        width: 100%;
        vertical-align: top;
        border-radius: 3px;
    }
`;
