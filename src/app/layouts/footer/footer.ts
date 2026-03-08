import { Component, inject } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const FOLLOW_US = [
  {
    icon: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=100066932070894',
  },
  {
    icon: 'instagram',
    link: 'https://www.instagram.com/pflexh/',
  },
];

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  year = new Date().getFullYear();
  owner = 'PFLEXH';
  rights = 'Todos os direitos reservados';
  developer = 'Little Robot Studio';

  follows = FOLLOW_US;

  constructor() {
    const library = inject(FaIconLibrary);
    library.addIcons(faFacebook, faInstagram);
    library.addIcons(faPhone, faEnvelope)
  }

  getCopyright(): string {
    return `© 2018-${this.year} ${this.owner}. ${this.rights}.`;
  }
}
