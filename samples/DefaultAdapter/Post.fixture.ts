import { ObjectBlueprint } from '../../src';
import { IPost } from '../00-entities/interfaces';

export class PostFixture extends ObjectBlueprint<IPost> {
    constructor() {
        super();

        this.type('post');

        this.define(async (faker) => ({
            title: faker.company.catchPhrase(),
            body: faker.lorem.paragraphs(2, '\n\n'),
        }));

        this.state('with-author', async (faker) => ({
            author: async (factory) => await factory.for('user').create(),
        }));

        this.state('with-comments', async (faker) => ({
            comments: async (factory) =>
                await factory
                    .for('comment')
                    .state('with-user')
                    .create(3),
        }));
    }
}
