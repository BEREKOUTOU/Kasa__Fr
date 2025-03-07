import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '../Nav';

describe('Nav', () => {
  it('renders navigation links correctly', () => {
    render(<Nav />);
    
    const homeLink = screen.getByText('Accueil');
    const aboutLink = screen.getByText('A propos');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  it('applies correct CSS classes', () => {
    render(<Nav />);
    
    const homeLink = screen.getByText('Accueil');
    const aboutLink = screen.getByText('A propos');

    expect(homeLink).toHaveClass('nav-header__nav-link-home', 'selected');
    expect(aboutLink).toHaveClass('nav-header__nav-link-about');
  });

  it('renders within nav-header container', () => {
    render(<Nav />);
    
    const navContainer = screen.getByRole('navigation');
    expect(navContainer).toHaveClass('nav-header');
  });
});
