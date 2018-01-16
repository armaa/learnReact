import React from 'react';

export class ShortenerResult extends React.Component {
    render() {
        return (
            <div className="text-color">
                {
                    this.props.url ? `From ShortenerResult: ${this.props.url}` : null
                }
            </div>
        );
    }
}