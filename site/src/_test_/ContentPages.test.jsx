/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SurvivorsPage from '../Pages/SurvivorsPage';
import ItemsPage from '../Pages/ItemsPage';
import MonstersPage from '../Pages/MonstersPage';
import EnvironmentsPage from '../Pages/EnvironmentsPage';
import ArtifactsPage from '../Pages/ArtifactsPage';
import InteractablesPage from '../Pages/InteractablesPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect, describe, beforeEach, test } from 'vitest';

describe('Survivors Page', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SurvivorsPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    });

    test('Test Subheader', async () => {
        const subheader = screen.getByText("Survivors");
        expect(subheader).toBeInTheDocument();
    });

    test('Test Cards', async () => {
        const cardList = screen.getByText("Double Tap").parentElement.parentElement;
        for (const child of cardList.children) {
            expect(child.classList.contains("Card")).toBeTruthy();
        }
    })
});

describe('Items Page', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ItemsPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    });

    test('Test Subheader', async () => {
        const subheader = screen.getByText("Items");
        expect(subheader).toBeInTheDocument();
    });

    test('Test Cards', async () => {
        const cardList = screen.getByText("Armor-Piercing Rounds").parentElement.parentElement;
        for (const child of cardList.children) {
            expect(child.classList.contains("Card")).toBeTruthy();
        }
    })
});

describe('Monsters Page', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MonstersPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    });

    test('Test Subheader', async () => {
        const subheader = screen.getByText("Monsters");
        expect(subheader).toBeInTheDocument();
    });

    test('Test Cards', async () => {
        const cardList = screen.getByText("Alloy Vulture").parentElement.parentElement;
        for (const child of cardList.children) {
            expect(child.classList.contains("Card")).toBeTruthy();
        }
    })
});

describe('Environments Page', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<EnvironmentsPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    });

    test('Test Subheader', async () => {
        const subheader = screen.getByText("Environments");
        expect(subheader).toBeInTheDocument();
    });

    test('Test Cards', async () => {
        const cardList = screen.getByText("Distant Roost").parentElement.parentElement;
        for (const child of cardList.children) {
            expect(child.classList.contains("Card")).toBeTruthy();
        }
    })
});

describe('Artifacts Page', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ArtifactsPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    });

    test('Test Subheader', async () => {
        const subheader = screen.getByText("Artifacts");
        expect(subheader).toBeInTheDocument();
    });

    test('Test Cards', async () => {
        const cardList = screen.getByText("Chaos").parentElement.parentElement;
        for (const child of cardList.children) {
            expect(child.classList.contains("Card")).toBeTruthy();
        }
    })
});

describe('Interactables Page', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<InteractablesPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    });

    test('Test Subheader', async () => {
        const subheader = screen.getByText("Interactables");
        expect(subheader).toBeInTheDocument();
    });

    test('Test Cards', async () => {
        const cardList = screen.getByText("Small Chest").parentElement.parentElement;
        for (const child of cardList.children) {
            expect(child.classList.contains("Card")).toBeTruthy();
        }
    })
});