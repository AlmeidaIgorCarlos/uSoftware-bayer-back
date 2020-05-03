const sinon = require('sinon')
const { assert } = require('chai')
const { user } = require('../src/models')
const UserRepository = require('../src/repository/user.repository')

describe('User Repository Tests', () => {
    const usersListMock = {
        dataValues: [{
            id: '1',
            firstName: 'first user firstName',
            lastName: 'first user lastname',
            email: 'email@gmail.com',
            password: '1234',
            role: 'admin'
        }, {
            id: '2',
            firstName: 'second user firstName',
            lastName: 'last user lastName',
            email: 'email@gmail.com',
            password: '1234',
            role: 'user'
        }, {
            id: '3',
            firstName: 'third user firstName',
            lastName: 'third user lastName',
            email: 'email@gmail.com',
            password: '1234',
            role: 'user'
        }]
    }

    describe('getUsersByParameters', () => {
        const localUserRepository = new UserRepository(user)

        sinon.stub(localUserRepository.user).findAll
            .withArgs()
            .returns(usersListMock)
            .withArgs({
                where: { role: 'administrator' }
            })
            .returns({ dataValues: [] })

        it('In case no parameter, it must return all data avaiable', async() => {
            const users = await localUserRepository.getUsersByParameters()
            assert.isArray(users)
            assert.isTrue(users.length === 3)
        })

        it('In case the parameter is has a where clause that has no corresponding data, it must return an empty array', async() => {
            try {
                await localUserRepository.getUsersByParameters({
                    where: { role: 'administrator' }
                })
            } catch (error) {
                assert.isArray(users)
                assert.isTrue(users.length === 0)
            }
        })
    })
})