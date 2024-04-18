/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CalculatorPage from '../Pages/CalculatorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect, describe, beforeEach, test } from 'vitest';

describe('CalculatorPage', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CalculatorPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    });

    test('Test Checkboxes', async () => {
        const vsBossCheckbox = screen.getByLabelText(/Vs Boss/i);
        const vsHealthyCheckbox = screen.getByLabelText(/Vs Healthy Target/i);
        const watchesBrokenCheckbox = screen.getByLabelText(/Watches Broken/i);
        const meleeRangeCheckbox = screen.getByLabelText(/In Melee Range/i);
        const bandsActiveCheckbox = screen.getByLabelText(/Bands Active/i);
        const shieldsUpCheckbox = screen.getByLabelText(/Shields Up/i);
        const perfectLuckCheckbox = screen.getByLabelText(/Perfect Luck/i);
        const terribleLuckCheckbox = screen.getByLabelText(/Terrible Luck/i);
    
        expect(vsBossCheckbox.checked).toBeFalsy();
        fireEvent.click(vsBossCheckbox);
        expect(vsBossCheckbox.checked).toBeTruthy();

        expect(vsHealthyCheckbox.checked).toBeFalsy();
        fireEvent.click(vsHealthyCheckbox);
        expect(vsHealthyCheckbox.checked).toBeTruthy();

        expect(watchesBrokenCheckbox.checked).toBeFalsy();
        fireEvent.click(watchesBrokenCheckbox);
        expect(watchesBrokenCheckbox.checked).toBeTruthy();

        expect(meleeRangeCheckbox.checked).toBeFalsy();
        fireEvent.click(meleeRangeCheckbox);
        expect(meleeRangeCheckbox.checked).toBeTruthy();

        expect(bandsActiveCheckbox.checked).toBeFalsy();
        fireEvent.click(bandsActiveCheckbox);
        expect(bandsActiveCheckbox.checked).toBeTruthy();

        expect(shieldsUpCheckbox.checked).toBeTruthy();
        fireEvent.click(shieldsUpCheckbox);
        expect(shieldsUpCheckbox.checked).toBeFalsy();

        expect(perfectLuckCheckbox.checked).toBeFalsy();
        fireEvent.click(perfectLuckCheckbox);
        expect(perfectLuckCheckbox.checked).toBeTruthy();

        expect(terribleLuckCheckbox.checked).toBeFalsy();
        fireEvent.click(terribleLuckCheckbox);
        expect(terribleLuckCheckbox.checked).toBeTruthy();

        expect(perfectLuckCheckbox.checked).toBeFalsy();
        fireEvent.click(terribleLuckCheckbox);
        expect(terribleLuckCheckbox.checked).toBeFalsy();
    });

    test('Test Counters', async () => {
        var count0items = screen.getAllByText(/x0/i);
        expect(count0items.length).toBe(16);
        const plusOneButtons = screen.getAllByText(/\+1/i);
        plusOneButtons.forEach(button => {
            fireEvent.click(button);
        });
        var count0items = screen.getAllByText(/x0/i);
        var count1items = screen.getAllByText(/x1/i);
        var count2items = screen.getAllByText(/x2/i);
        expect(count0items.length).toBe(1);
        expect(count1items.length).toBe(14);
        expect(count2items.length).toBe(1);
    });

    test('Test Calculator', async () => {
        const plusOneButtons = screen.getAllByText(/\+1/i);
        plusOneButtons.forEach(button => {
            fireEvent.click(button);
        });
        var damage = screen.getByText(/USUAL DAMAGE/i);
        expect(damage.textContent).toBe("3,786% Usual Damage");

        const vsBossCheckbox = screen.getByLabelText(/Vs Boss/i);
        const vsHealthyCheckbox = screen.getByLabelText(/Vs Healthy Target/i);
        const watchesBrokenCheckbox = screen.getByLabelText(/Watches Broken/i);
        const meleeRangeCheckbox = screen.getByLabelText(/In Melee Range/i);
        const bandsActiveCheckbox = screen.getByLabelText(/Bands Active/i);
        const shieldsUpCheckbox = screen.getByLabelText(/Shields Up/i);
    
        fireEvent.click(vsBossCheckbox);
        fireEvent.click(vsHealthyCheckbox);
        fireEvent.click(watchesBrokenCheckbox);
        fireEvent.click(meleeRangeCheckbox);
        fireEvent.click(bandsActiveCheckbox);
        fireEvent.click(shieldsUpCheckbox);

        var damage = screen.getByText(/USUAL DAMAGE/i);
        expect(damage.textContent).toBe("15,199% Usual Damage");
    });
});

