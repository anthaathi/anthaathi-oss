import React from 'react';
import { Breadcrumbs } from 'baseui/breadcrumbs';
import { StyledLink } from 'baseui/link';
import { Link } from 'react-router-dom';

export interface Step {
  title: React.ReactNode;
  id: string;
}

const steps: Step[] = [
  {
    title: 'Information',
    id: 'information',
  },
  {
    title: 'Shipping',
    id: 'shipping',
  },
  {
    title: 'Payment',
    id: 'payment',
  },
];

export function Breadcrumb() {
  return (
    <Breadcrumbs>
      {steps.map((res) => {
        return (
          <StyledLink $as={Link} to={res.id} key={res.id}>
            {res.title}
          </StyledLink>
        );
      })}
    </Breadcrumbs>
  );
}
