// adding a new bookmark row to the popup
const addNewBookmark = (bookmarks, bookmark) => {
  const bookmarkTitleElement = document.createElement('div');
  const controlsElement = document.createElement('div');
  const newBookmarkElement = document.createElement('div');

  bookmarkTitleElement.textContent = bookmark.desc;
  bookmarkTitleElement.className = 'bookmark-title';
  controlsElement.className = 'bookmark-controls';

  setBookmarkAttributes('play', onPlay, controlsElement);
  setBookmarkAttributes('delete', onDelete, controlsElement);

  newBookmarkElement.id = 'bookmark-' + bookmark.time;
  newBookmarkElement.className = 'bookmark';
  newBookmarkElement.setAttribute('timestamp', bookmark.time);

  newBookmarkElement.appendChild(bookmarkTitleElement);
  newBookmarkElement.appendChild(controlsElement);
  bookmarks.appendChild(newBookmarkElement);
};

const viewBookmarks = (currentBookmarks = []) => {
  const bookmarksElement = document.getElementById('bookmarks');
  bookmarksElement.innerHTML = '';

  if (currentBookmarks.length > 0) {
    for (let i = 0; i < currentBookmarks.length; i++) {
      const bookmark = currentBookmarks[i];
      addNewBookmark(bookmarksElement, bookmark);
    }
  } else {
    bookmarksElement.innerHTML = '<i class="row">No bookmarks to show</i>';
  }

  return;
};

const onPlay = async (e) => {
  const bookmarkTime = e.target.parentNode.parentNode.getAttribute('timestamp');
  const activeTab = await getActiveTabURL();

  chrome.tabs.sendMessage(activeTab.id, {
    type: 'PLAY',
    value: bookmarkTime,
  });
};

const onDelete = (e) => {};

const setBookmarkAttributes = () => {};

document.addEventListener('DOMContentLoaded', () => {});
