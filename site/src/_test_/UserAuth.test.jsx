/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpForm from '../components/SignUpForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect, describe, beforeEach, test } from 'vitest';

describe('SignUpForm', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignUpForm/>}/>
                </Routes>
            </BrowserRouter>
        );
    });

    test('Test SignUp', async () => {
        const email = screen.getByLabelText("Email");
        const username = screen.getByLabelText("Username");
        const password = screen.getByLabelText("Password");
        const confirmPassword = screen.getByLabelText("Confirm Password");
        expect(email).toBeInTheDocument();
        expect(username).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(confirmPassword).toBeInTheDocument();
    });
});

