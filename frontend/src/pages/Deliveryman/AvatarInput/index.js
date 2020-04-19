import React, { useRef, useState, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

// import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import { MdPhotoSizeSelectActual } from 'react-icons/md';

import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput({ name, avatar }) {
  const { fieldName, defaultValue, registerField } = useField(name);

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef(null);

  useEffect(() => {
    async function previewAvatar() {
      setPreview(avatar);
    }

    previewAvatar();
  }, [avatar]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview({ url });
  }
  return (
    <Container>
      <label htmlFor={fieldName}>
        {preview ? (
          <img src={preview.url} alt="" />
        ) : (
          <div>
            <MdPhotoSizeSelectActual size={50} color="#DDDDDD" />
            <span className="addPicture">Adicionar foto</span>
          </div>
        )}
        <input
          type="file"
          id={fieldName}
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  name: PropTypes.shape().isRequired,
  avatar: PropTypes.shape().isRequired,
};
