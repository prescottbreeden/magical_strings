import React from 'react';
import { map } from 'ramda';
import { album as albums } from '../constants/albums.json';
import { getProp } from '../utilities/general.utils';

const Recordings = () => {
  return (
    <React.Fragment>
      <h2 className="page__title">Recordings</h2>
      <div className="recordings">
        {map(album => {
          const get = getProp(album);
          return (
            <div className="album" key={get('title')}>
              <iframe
                className="album__iframe"
                title={get('title')}
                src={`https://bandcamp.com/EmbeddedPlayer/album=${get(
                  'album'
                )}/size=large/bgcol=333333/linkcol=2ebd35/transparent=true/`}
                seamless
              >
                <a
                  href={`https://magicalstrings.bandcamp.com/album/${get(
                    'name'
                  )}`}
                >
                  {get('title')} by Magical Strings
                </a>
              </iframe>
            </div>
          );
        }, albums)}
      </div>
    </React.Fragment>
  );
};

export default Recordings;
