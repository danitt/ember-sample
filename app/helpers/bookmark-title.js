import { helper } from '@ember/component/helper';

export function bookmarkTitle([title, about]/*, hash*/) {
  return about ? `${title} - ${about}` : title;
}

export default helper(bookmarkTitle);
