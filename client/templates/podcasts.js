import { Template } from 'meteor/templating';
import './podcasts.html';

Template.podcasts.helpers({
  podcasts() {
    return [
      { title: 'Back to Work', url: 'http://5by5.tv/b2w' },
      { title: 'Roderick on the Line', url: 'http://www.merlinmann.com/roderick' },
      { title: 'Here\'s the Thing', url: 'http://www.wnyc.org/shows/heresthething' },
      { title: 'Evening Dhamma Talks', url: 'http://www.dhammatalks.org/mp3_index.html' },
    ];
  },
});
