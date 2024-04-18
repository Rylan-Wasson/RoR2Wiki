/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect, describe, beforeEach, test } from 'vitest';

describe('Components', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                </Routes>
            </BrowserRouter>
        );
    });

    test('Test Header', async () => {
        const header = screen.getByText("Risk of Rain 2 Wiki");
        expect(header).toBeInTheDocument();
        expect(header.parentElement.parentElement.parentElement.parentElement.classList.contains("header")).toBeTruthy();
    });

    test('Test Footer', async () => {
        const footer = screen.getByText(/Authors/i);
        expect(footer.textContent).toBe("Authors: Logan Giddings, Henry Kreemer, Rylan Wasson, Cole Yamamura");
    });

    test('Test Subheader', async () => {
        const subheader = screen.getByText("Content");
        expect(subheader).toBeInTheDocument();
    });
});

