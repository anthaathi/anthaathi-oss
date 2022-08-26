import { KanbanBoard } from '../Features/KanbanBoard/Components/Kanban';
import React from 'react';
import { useStyletron } from 'baseui';
import { Modal, SIZE } from 'baseui/modal';
import { Outlet, useNavigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

export function KanbanBoardPage() {
  const [css, $theme] = useStyletron();

  const [search] = useSearchParams();

  const { issue, space } = useParams<{ issue: string; space: string }>();

  const navigate = useNavigate();

  return (
    <div className={css({ overflow: 'auto' })}>
      <Modal
        isOpen={Boolean(issue)}
        size={SIZE.auto}
        onClose={() => {
          navigate({ pathname: '/spaces/' + space, search: search.toString() });
        }}
      >
        <div
          className={css({
            maxWidth: $theme.sizing.maxAppWidthDense,
            width: '100vw',
            padding: '1rem',
          })}
        >
          <Outlet />
        </div>
      </Modal>

      <KanbanBoard />
    </div>
  );
}
